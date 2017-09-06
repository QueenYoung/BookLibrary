function createAPI(pattern) {
  const resMessage = (name) => `NOT IMPLEMENT: ${pattern} ${name}`;
  const apiLists = [
    'list',
    'detail',
    'createGet',
    'createPost',
    'deleteGet',
    'deletePost',
    'updateGet',
    'updatePost'
  ];
  const api = {};
  for (let listname of apiLists) {
    Object.assign(api, {
      [`${listname}`](req, res) {
        res.send(resMessage(listname))
      }
    });
  }
  return api;
}

module.exports = createAPI;