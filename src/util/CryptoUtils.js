import CryptoJS from 'crypto-js/crypto-js';

const DEFAULT_KEY = CryptoJS.enc.Utf8.parse('jkkl888@'); // 密钥 后端提供
const iv = CryptoJS.enc.Utf8.parse('xrwd'); // 偏移量

/**
 * AES加密 ：字符串 key iv  返回base64
 */
export function Encrypt(word) {
    const srcs = CryptoJS.enc.Utf8.parse(word);
    const encrypted = CryptoJS.AES.encrypt(srcs, DEFAULT_KEY, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * AES 解密 ：字符串 key iv  返回base64
 *  */
export function Decrypt(word) {
    const base64 = CryptoJS.enc.Base64.parse(word);
    const src = CryptoJS.enc.Base64.stringify(base64);

    const decrypt = CryptoJS.AES.decrypt(src, DEFAULT_KEY, {
        iv: iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt);
}

/**
 * 生成签名
 * @param {string} text - 要签名的文本
 * @param {string} key - 签名密钥（可选）
 * @param {string} algorithm - 签名算法（可选：MD5/SHA1/SHA256/SHA512）
 * @returns {string} 签名结果
 */
export const sign = (text, key=DEFAULT_KEY, algorithm = 'MD5') => {
    try {
        let hmac;
        switch (algorithm.toUpperCase()) {
            case 'MD5':    // 32 字符
                hmac = CryptoJS.HmacMD5(text, key);
                break;
            case 'SHA1':   // 40 字符
                hmac = CryptoJS.HmacSHA1(text, key);
                break;
            case 'SHA256': // 64 字符
                hmac = CryptoJS.HmacSHA256(text, key);
                break;
            case 'SHA512': // 128 字符
                hmac = CryptoJS.HmacSHA512(text, key);
                break;
            default:
                throw new Error('不支持的签名算法');
        }
        return hmac.toString();
    } catch (error) {
        console.error('签名失败:', error);
        throw new Error('签名失败');
    }
}


/**
 * Base64 编码
 * @param {string} text - 要编码的文本
 * @returns {string} Base64 编码后的文本
 */
export const encodeBase64 = (text) => {
    try {
        const wordArray = CryptoJS.enc.Utf8.parse(text);
        return CryptoJS.enc.Base64.stringify(wordArray);
    } catch (error) {
        console.error('Base64编码失败:', error);
        throw new Error('Base64编码失败');
    }
}

/**
 * Base64 解码
 * @param {string} base64Text - Base64 编码的文本
 * @returns {string} 解码后的文本
 */
export const decodeBase64 = (base64Text) => {
    try {
        const parsedWordArray = CryptoJS.enc.Base64.parse(base64Text);
        return parsedWordArray.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Base64解码失败:', error);
        throw new Error('Base64解码失败');
    }
}

/**
 * MD5 哈希
 * @param {string} text - 要哈希的文本
 * @returns {string} MD5 哈希值
 */
export const md5 = (text) => {
    return CryptoJS.MD5(text).toString();
}

/**
 * 生成随机密钥
 * @param {number} length - 密钥长度（字节）
 * @returns {string} 随机密钥
 */
export const generateKey = (length = 32) => {
    return CryptoJS.lib.WordArray.random(length).toString();
}

/**
 * 生成高质量的哈希值
 * @param {string} text - 要哈希的文本
 * @param {string} [salt] - 可选的盐值
 * @param {number} [iterations=10000] - 哈希迭代次数
 * @returns {string} 64字符的哈希值
 */
export const hash = (text, salt = generateKey(16), iterations = 10000) => {
    try {
        // 使用提供的盐值或生成新的盐值
        const currentSalt = salt || generateKey(16);
        // 将文本和盐值组合
        let combined = text + currentSalt;
        // 首先使用 SHA3-512
        let hash = CryptoJS.SHA3(combined, {outputLength: 512});
        // 多轮哈希迭代
        for (let i = 0; i < iterations; i++) {
            // 在每次迭代中混合使用不同的哈希算法
            switch (i % 4) {
                case 0:
                    hash = CryptoJS.SHA3(hash, {outputLength: 512});
                    break;
                case 1:
                    hash = CryptoJS.SHA512(hash);
                    break;
                case 2:
                    hash = CryptoJS.RIPEMD160(hash);
                    break;
                case 3:
                    // 在部分迭代中加入额外的盐值
                    const extraSalt = generateKey(8);
                    hash = CryptoJS.HmacSHA512(hash, extraSalt);
                    break;
            }
        }
        // 最后再进行一次 SHA3-512
        const finalHash = CryptoJS.SHA3(hash, {outputLength: 512});
        // 返回最终的哈希值和使用的盐值
        return {
            hash: finalHash.toString(),
            salt: currentSalt
        };
    } catch (error) {
        console.error('哈希生成失败:', error);
        throw new Error('哈希生成失败');
    }
}

/**
 * 验证哈希值
 * @param {string} text - 原始文本
 * @param {string} hash - 哈希值
 * @param {string} salt - 盐值
 * @param {number} [iterations=10000] - 哈希迭代次数
 * @returns {boolean} 验证是否通过
 */
export const verifyHash = (text, hash, salt, iterations = 10000) => {
    try {
        const computedHash = hash(text, salt, iterations);
        return computedHash.hash === hash;
    } catch (error) {
        console.error('哈希验证失败:', error);
        return false;
    }
}

/**
 * 生成确定性哈希值（相同输入总是产生相同输出）
 * @param {string} text - 要哈希的文本
 * @returns {string} 64字符的哈希值
 */
export const deterministicHash = (text) => {
    try {
        // 使用固定的盐值和较少的迭代次数
        const fixedSalt = 'bK#9$mP2@qL5';
        const iterations = 1000;
        return hash(text, fixedSalt, iterations).hash;
    } catch (error) {
        console.error('确定性哈希生成失败:', error);
        throw new Error('确定性哈希生成失败');
    }
}

