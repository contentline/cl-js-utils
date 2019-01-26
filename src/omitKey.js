const omitKey = (key, { [key]: _, ...rest }) => rest;

export default omitKey;
