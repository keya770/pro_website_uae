import { withBasePath } from "./withBasePath";

export const assetPath = (path: string) => withBasePath(path);

// Temporary re-export to keep existing imports working while migrating to withBasePath
export { withBasePath };
