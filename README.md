# Welcome to Atom mono 👋

This is a monorepo for Expo project using pnpm + turborepo.

## Prerequisite

```bash
npm i -g pnpm
npm i -g turbo
```

## Get started

1. Install dependencies

```bash
pnpm i
```

2. Build a development client

This app does not work with Expo Go since some custom native modules are
installed, you will have to build a development client.

```bash
cd apps/mobile
# this can take a while
pnpm run ios
# or android
pnpm run android
```

3. Start the both web and mobile

```bash
turbo dev
```

You will be able to run both web and mobile together. Notice the mobile one
is in interactive mode. So you could press `Enter` to enter interactive mode.
If your turbo output is showing the `web#dev`, you could use up / down arrow to
switch panel.

I recommend use iOS simulator to test things, so press `i` in the console.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

