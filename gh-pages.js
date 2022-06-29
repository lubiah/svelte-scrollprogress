import { publish } from 'gh-pages';


publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/kudadam/svelte-scrollprogress.git', // Update to point to your repository
  user: {
   name: 'Lucretius Biah', // update to use your name
   email: 'lucretiusbiah@protonmail.com' // Update to use your email
  },
  dotfiles: true
  },
  (e) => {
   console.log(e,'Deploy Complete!');
  }
);