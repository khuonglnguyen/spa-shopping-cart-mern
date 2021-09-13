const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({  
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderItems: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      qty: Number,
    },
  ],
  serial: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', OrderSchema);