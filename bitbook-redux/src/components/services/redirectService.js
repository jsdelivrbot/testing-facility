export const redirectService = () => {

    goTo(path) {
        window.location.assign(`#${path}`);
    }
};