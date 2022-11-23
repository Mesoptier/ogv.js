export const OGVVersion: string;

declare class OGVCompatClass {
    supported(component: "OGVDecoder" | "OGVPlayer"): boolean;
}

export const OGVCompat: OGVCompatClass;

export class OGVPlayer {
}

export class OGVLoader {
}

export class OGVMediaError {
}

export class OGVMediaType {
}

export class OGVTimeRanges {
}
