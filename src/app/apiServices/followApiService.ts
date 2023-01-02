import assert from "assert";
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";

import { Follower, Following, FollowSearchObj } from "../../types/follow";

class FollowApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getMemberFollowers(data: FollowSearchObj): Promise<Follower[]> {
    try {
      const url = `/follow/followers?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const followers: Follower[] = result.data.data;
      return followers;
    } catch (error: any) {
      console.log("ERROR ::: getMemberFollowers", error.message);
      throw error;
    }
  }

  public async getMemberFollowings(
    data: FollowSearchObj
  ): Promise<Following[]> {
    try {
      const url = `/follow/followings?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const followings: Following[] = result.data.data;
      return followings;
    } catch (error: any) {
      console.log("ERROR ::: getMemberFollowings", error.message);
      throw error;
    }
  }

  public async subscribe(mb_id: string): Promise<Boolean> {
    try {
      const result = await axios.post(
        this.path + "/follow/subscribe",
        { mb_id: mb_id },
        {
          withCredentials: true,
        }
      );
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      return result.data.data === "subscribed";
    } catch (error: any) {
      console.log("ERROR ::: subscribe", error.message);
      throw error;
    }
  }

  public async unsubscribe(mb_id: string): Promise<Boolean> {
    try {
      const result = await axios.post(
        this.path + "/follow/unsubscribe",
        { mb_id: mb_id },
        {
          withCredentials: true,
        }
      );
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      return result.data.data === "unsubscribed";
    } catch (error: any) {
      console.log("ERROR ::: unsubscribe", error.message);
      throw error;
    }
  }
}

export default FollowApiService;
