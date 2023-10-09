import React from 'react';

// 路由类型
export type Route = {
  path: string;
  exact?: boolean;
  Component: React.LazyExoticComponent<React.FC<{}>>;
  redirect?: string;
  meta?: {
    title?: string;
    auth?: boolean;
    roles?: Array<string>
    icon?: any;
  };
  children?: Routes;
};

export type Routes = Array<Route>;
