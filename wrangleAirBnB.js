const fs = require("fs");

// load in the json_coll2023.json file
const json_coll = require("./airbnb_dublin.json");

oneDoc = json_coll[0];

console.log(oneDoc);

function editDoc(doc) {
  //
  delete doc.host_verifications;
  doc.reviews = {
    overall: doc.review_scores_rating,
    accuracy: doc.review_scores_accuracy,
    cleanliness: doc.review_scores_cleanliness,
    checkin: doc.review_scores_checkin,
    communication: doc.review_scores_communication,
    location: doc.review_scores_location,
    value: doc.review_scores_value,
  };
  delete doc.review_scores_rating;
  delete doc.review_scores_accuracy;
  delete doc.review_scores_cleanliness;
  delete doc.review_scores_checkin;
  delete doc.review_scores_communication;
  delete doc.review_scores_location;
  delete doc.review_scores_value;

  return doc;
}

editDoc(oneDoc);
console.log(oneDoc);

for (let i = 0; i < json_coll.length; i++) {
  json_coll[i] = editDoc(json_coll[i]);
}

const writeJsonToFile = (path, data) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), "utf8");
    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }
};

writeJsonToFile("airbnb_cleaned.json", json_coll);

console.log(json_coll[3]);
