import {Omit} from "typelevel-ts";

// https://github.com/mobxjs/mobx-react/issues/256#issuecomment-315397176
declare module "mobx-react" {
  export function inject<D extends {}>(
    mapStoreToProps: (store: any, ownProps?: D) => D
  ): <A extends D>(
    component: React.ComponentType<A>
  ) => React.SFC<Omit<A, keyof D> & Partial<D>>;
}
