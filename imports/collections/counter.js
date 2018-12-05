/** ************Collection Details********************** */
// Collection Name : counterCollection
// Version :001
/** ************************************************** */

import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const counterCollection = new Mongo.Collection("counters");

counterCollection.attachSchema(
  new SimpleSchema({
    key_name: {
      type: String,
      label: "keyname"
    },
    counter: {
      type: Number,
      label: "counter"
    }
  })
);

if (Meteor.isServer) {
  counterCollection.allow({
    insert() {
      return true;
    },
    update() {
      return true;
    },
    remove() {
      return true;
    }
  });
}

export default counterCollection;
