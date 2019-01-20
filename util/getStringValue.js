const getStringValue = data  => {
  return  Object.entries(data).map(stat => {
        const value = stat[1];
        if (value) {
          if (typeof value === 'string' || typeof value === 'number') {
            const name = stat[0].split('_').join(' ');
            if (name !== 'name' && name !== 'id') {
              return {
                name,
                value
              };
            }
          }
        }
      });
}
module.exports = getStringValue