import addStoryBookCommands from "cypress-storybook-commands";

addStoryBookCommands({
  version: 7,
  viewportPresets: {
    // see https://docs.cypress.io/api/commands/viewport.html#Arguments
    desktop: [1920, 1080],
  },
  registerSnapshotCommands: true, // false if you already include cypress-image-snapshot/command
});
