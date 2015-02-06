import DS from "ember-data";

export default DS.Model.extend({
  name: Ds.attr("string"),
  date_of_birth: Ds.attr("string"),
  createdAt: DS.attr("date"),
  updatedAt: DS.attr("date")
});
