const fs = require("fs");

if (process.argv[2]) {
  console.log(
    "There's no need to include which domain name to remove, as only one domain can be saved. Just writing `npm run remove-custom-domain` is all you need."
  );

  console.log("\nRemoving your custom domain name now.");
}

fs.writeFile("./CNAME", "", (error) => {
  if (error) {
    throw Error(
      "An error occurred when writing to the CNAME file. Please file an issue with the repository maintainer at https://github.com/abbreviatedman/fast/issues if one doesn't already exist."
    );
  }

  console.log(
    `Any saved domains have been removed from the CNAME file. To save a new domain name, use npm run save-custom-domain`
  );
});
