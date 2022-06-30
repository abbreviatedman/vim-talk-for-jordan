const fs = require("fs");

if (!process.argv[2]) {
  throw Error(
    "`npm run save-custom-domain` must be used with an argument. For example, you could write `npm run save-custom-domain vim-talk.surge.sh` so that `npm run deploy-custom-domain` will automatically deploy to that domain name from then on."
  );
}

fs.writeFile("./CNAME", process.argv[2], (error) => {
  if (error) {
    throw Error(
      "An error occurred when writing to the CNAME file. Please file an issue with the repository maintainer at https://github.com/abbreviatedman/fast/issues if one doesn't already exist."
    );
  }

  console.log(
    `The domain ${process.argv[2]} was saved to the CNAME file. To remove it, use npm run remove-custom-domain`
  );
});
