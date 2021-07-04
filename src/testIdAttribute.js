const testIdAttribute = (id) => {
  if (process.env.NODE_ENV === 'test' || process.env.SHOW_DEV === 'included') {
    return {
      'data-test-id': id
    };
  }
  return undefined;
}

// export {
  // testIdAttribute  
// };

export default testIdAttribute;