declare global {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  interface Post {
    id: number;
    title: string;
    content: string;
    author: User;
  }
}

// This is required to make TypeScript treat this file as a module
export { };