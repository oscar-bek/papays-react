import assert from "assert";
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import {
  BoArticle,
  SearchArticlesObj,
  SearchMemberArticlesObj,
} from "../../types/boArticle";

class CommunityApiService {
  getMemberCommunityArticles(memberArticleSearchObj: SearchMemberArticlesObj) {
    throw new Error("Method not implemented.");
  }
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTargetArticles(data: SearchArticlesObj) {
    try {
      let url = `/community/target?bo_id=${data.bo_id}&page=${data.page}&limit=${data.limit}`;
      if (data.order) url += `&order=${data.order}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (error: any) {
      console.log("ERROR ::: getTargetArticles", error.message);
      throw error;
    }
  }


}

export default CommunityApiService;
