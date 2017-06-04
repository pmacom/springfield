// import SimpleSchema from 'simpl-schema';
// SimpleSchema.extendOptions(['autoform']);

const Commercial = new Mongo.Collection('commercial');

const fields = {
   commercialID: {
     type: Number,
     label: "ID",
   },
 }

const commercial = new SimpleSchema( fields );

Commercial.attachSchema( commercial );
