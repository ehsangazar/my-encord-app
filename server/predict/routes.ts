import predict from "./db.json";

const get = (req, res) => {
  res.json(predict);
};

export default {
  get,
};
