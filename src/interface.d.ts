type AnyObject<T = any> = Record<string, T>;
type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R;
