type KeyTransform = (key: string) => string;

function transformKeys<T>(obj: T, transform: KeyTransform): T {
  if (Array.isArray(obj)) {
    return obj.map(v => transformKeys(v, transform)) as unknown as T;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = transform(key);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)[newKey] = transformKeys((obj as any)[key], transform);
      return result;
    }, {} as T);
  }
  return obj;
}

function camelToSnake(camelCaseString: string): string {
  return camelCaseString.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);
}

function snakeToCamel(snakeCaseString: string): string {
  return snakeCaseString.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
}

export const convertKeysToCamelCase = <T>(data: T) => {
  return transformKeys(data, snakeToCamel);
};

export const convertKeysToSnakeCase = <T>(data: T) => {
  return transformKeys(data, camelToSnake);
};
