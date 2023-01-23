export const stringConvert = (str: string | undefined) => {
    return str?.replace(/[&\/\\#, +()$~!@^%.'":*?<>{}]/g, '_').toLocaleLowerCase();
}