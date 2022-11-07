import { DecoratorFunction } from "@storybook/addons";

export type MappingFunction = (value: any) => React.ReactChild;

const deepApplyMap = (
  object: { [key: string]: any },
  mapping: { [key: string]: MappingFunction },
  deep: number
): { [key: string]: any } => {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      const mappingFunc = mapping[key];
      if (mappingFunc) {
        return [key, mappingFunc(value)];
      }

      // TODO: `(deep < 1)` is a workaround to avoid the crash in docs view mode or when changing the story state
      // https://app.asana.com/0/1202114683897430/1202109279133823/f
      if (typeof value === "object" && deep < 1) {
        if (Array.isArray(value)) {
          return [
            key,
            value.map((item) => deepApplyMap(item, mapping, deep + 1)),
          ];
        }

        return [key, deepApplyMap(value, mapping, deep + 1)];
      }

      return [key, value];
    })
  );
};

export const withArgsMapping = (mapping: {
  [key: string]: MappingFunction;
}): DecoratorFunction => {
  return (story, context) => {
    const updatedContext = {
      ...context,
      args: deepApplyMap(context.args, mapping, 0),
    };

    return story(updatedContext);
  };
};
