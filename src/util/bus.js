import mitt from 'mitt';

const eventBus = mitt();

export const Events = {
    LOAD_ARTICLE_SUMMARY_LIST: 0,
    DISPLAY_ARTICLE: 1,
}

export const publishEvent = (event, eventData) => {
    eventBus.emit(event, eventData);
}

export const subscribeEvent = (event, handler) => {
    eventBus.on(event, (eventData) => {
        handler(eventData);
    });
}

export const unsubscribeEvent = (event) => {
    eventBus.off(event);
}
