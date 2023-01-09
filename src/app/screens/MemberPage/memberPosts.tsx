import React, { ChangeEvent, useRef, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import assert from "assert";
import { Definer } from "../../../lib/Definer";
import MemberApiService from "../../apiServices/memberApiServices";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { verifiedMemberData } from "../../apiServices/verify";

export function MemberPosts(props: any) {
  const {
    renderChosenArticleHandler,
    chosenMemberBoArticles,
    setArticlesRebuild,
  } = props;

  
  /** HANDLERS */
  const targetLikeHandler = async (e: any) => {
    try {
      e.stopPropagation();
      assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      props.setArticlesRebuild(new Date());
    } catch (error: any) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <Box className={"post_content"}>
    {chosenMemberBoArticles.map((article: BoArticle) => {
        const image_path = article.art_image
          ? `${serverApi}/${article.art_image}`.replaceAll('\\','/')
          : "/community/default_article.svg";
        return (
          <Stack  
          className="all_article_box"
          sx={{ cursor: "pointer" }}
          onClick={() => renderChosenArticleHandler(article?._id)}>
            <Box
             className="all_article_img"
             sx={{ backgroundImage: `url(${image_path})` }}>
             </Box>
            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"} sx={{ mt: "5px" }}>
                <img
                  src={ article?.member_data?.mb_image
                    ? `${serverApi}/${article.member_data.mb_image}`
                    : "/auth/default_user.svg"
                }
                
                width={"35px"}
                height={"35px"}
                style={{ borderRadius: "50%", backgroundSize: "cover" }}
                
              />
              <span className="all_article_author_user">
                {article?.member_data?.mb_nick}
              </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
               <span className="all_article_title">{article?.bo_id}</span>
               <p className="all_article_desc">{article?.art_subject}</p>
              </Box>
              <Box>
                <Box
                  className={"article_share"}
                  style={{ width: "100%", height: "auto" }}
                  sx={{ mb: "10px" }}
                >
                  <Box
                    className={"article_share_main"}
                    style={{
                      color: "#fff",
                      marginLeft: "150px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                       {moment(article?.createdAt).format("YY-MM-DD HH:mm")}
                    <Checkbox
                      sx={{ ml: "40px" }}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: "red" }} />}
                      id={article?._id}
                      onClick={targetLikeHandler}
                      checked={
                        article?.me_liked && article.me_liked[0]?.my_favorite
                          ? true
                          : false
                      }
                    />
                    <span style={{ marginRight: "18px" }}>
                      {article?.art_likes}
                    </span>
                    <RemoveRedEyeIcon />
                    <span style={{ marginRight: "18px", marginLeft: "12px" }}>
                      {article?.art_views}
                    </span>
                    
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
    </Box>
  );
}
