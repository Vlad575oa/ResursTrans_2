import ru from "@/app/messages/ru.json";

export async function getServerTranslations() {
    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = ru;
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        return typeof value === 'string' ? value : key;
    };

    return { t };
}
