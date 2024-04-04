import { User } from './models/User';

const user = new User({ name: 'Bhupendra', age: 32 });
user.set({ name: 'new Name' });

console.log(user.get('name'));
console.log(user.get('age'));
