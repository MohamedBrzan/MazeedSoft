import { configureStore } from '@reduxjs/toolkit';
import { HeaderApi } from './apis/HeaderApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { FooterApi } from './apis/FooterApi';
import { TestimonialsApi } from './apis/TestimonialsApi';
import { CallUsApi } from './apis/CallUsApi';
import { AboutUsApi } from './apis/AboutUsApi';
import { HomeApi } from './apis/HomeApi';
import { FeaturesApi } from './apis/FeaturesApi';

export const store = configureStore({
  reducer: {
    [HeaderApi.reducerPath]: HeaderApi.reducer,
    [HomeApi.reducerPath]: HomeApi.reducer,
    [FeaturesApi.reducerPath]: FeaturesApi.reducer,
    [AboutUsApi.reducerPath]: AboutUsApi.reducer,
    [CallUsApi.reducerPath]: CallUsApi.reducer,
    [TestimonialsApi.reducerPath]: TestimonialsApi.reducer,
    [FooterApi.reducerPath]: FooterApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(HeaderApi.middleware)
      .concat(HomeApi.middleware)
      .concat(FeaturesApi.middleware)
      .concat(AboutUsApi.middleware)
      .concat(CallUsApi.middleware)
      .concat(TestimonialsApi.middleware)
      .concat(FooterApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
