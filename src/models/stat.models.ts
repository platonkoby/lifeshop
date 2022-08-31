export interface StatProps {
    name: string;
    value?: number | string | string[];
    negative?: boolean;
}

export interface Today {
    name: "today",
    updateTime: string,
    value: string
}