import axios from 'axios';

export const getImg = () => axios.get('https://picsum.photos/200/300/?blur=2');
