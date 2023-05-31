import { CountStore } from "./CountStore";
import { GithubUserDetails } from "./GithubUserDetails";

export interface IRootStore {
  countStore: CountStore;
  githubUserDetails:GithubUserDetails;
}

export class RootStore implements IRootStore {
  countStore: CountStore;
  githubUserDetails:GithubUserDetails;

  constructor() {
    this.countStore = new CountStore(this);
    this.githubUserDetails = new GithubUserDetails(this);
  }
}
