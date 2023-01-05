import { applyMiddleware } from "@reduxjs/toolkit";
import assert from "assert";
import axios from "axios";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import {
  BoArticle,
  BoArticleInput,
  SearchArticlesObj,
  SearchMemberArticlesObj,
} from "../../types/boArticle";

class CommunityApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async createArticles(data: BoArticleInput) {
    try {
      const result = await axios.post(this.path + "/community/create", data,{
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (error: any) {
      console.log(`ERROR ::: createArticles, ${error.message}`);
      throw error;
    }
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
      console.log(`ERROR ::: getTargetArticles, ${error.message}`);
      throw error;
    }
  }

  public async getMemberCommunityArticles(data: SearchMemberArticlesObj) {
    try {
      let url = `/community/articles?mb_id=${data.mb_id}&page=${data.page}&limit=${data.limit}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (error: any) {
      console.log("ERROR ::: getMemberCommunityArticles", error.message);
      throw error;
    }
  }

  public async getChosenArticle(art_id: string) {
    try {
      let url = `/community/single-article/${art_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const article: BoArticle = result.data.data;
      return article;
    } catch (error: any) {
      console.log("ERROR ::: getChosenArticle", error.message);
      throw error;
    }
  }

  public async uploadImageToServer(image: any) {
    try {
      let formData = new FormData();
      formData.append('community_image', image);
      console.log(image);

      const result = await axios(`${this.path}/community/image`, {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state:::", result.data.state);

      const iamge_name: string = result.data.data;
      return iamge_name;
    } catch (error: any) {
      console.log("ERROR ::: uploadImageToServer", error.message);
      throw error;
    }
  }
}

export default CommunityApiService;
