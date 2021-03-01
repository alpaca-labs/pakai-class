function pakaiClass(...requestData: any[]): string {
    return requestData.reduce(
        (classList, arg) => (
            (typeof arg === 'string' || Array.isArray(arg))
                ? classList.concat(arg)
                : classList
        ),
        [],
    ).filter(Boolean).join(' ');
};
export default pakaiClass