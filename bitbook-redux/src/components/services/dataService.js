import React, { Component } from "react";
import { SESSION_STORAGE_USER_KEY } from "../constants";

import { fetchService } from "./fetch";
import Profile from "../entities/Profile";
import User from "../entities/User";
import Post from "../entities/Post";

export const dataService = () => {

    fetchProfile(successHandler, errorHandler) {
        fetchService.get("profile",
            profileData => {
                const profile = new Profile(profileData);
                sessionStorage.setItem(SESSION_STORAGE_USER_KEY, profile.userId);
                successHandler(profile);
            },
            error => errorHandler(error););
    }

    updateProfile(data, successHandler, errorHandler) {
        fetchService.put("Profiles", data, 
            response => successHandler(response),
            error => errorHandler(error));
    }

    fetchUsers(successHandler, errorHandler, top) {
        fetchService.get(`users?$top=${top}`,
            data => {
                const users = data.map(element => new User(element));
                successHandler(users);
            },
            error => errorHandler(error));
    }

    fetchUsersById(id, successHandler, errorHandler) {
        fetchService.get(`users/${id}`,
            profileData => {
                const profile = new Profile(profileData);
                successHandler(profile);
            },
            error => errorHandler(error));
    }

    fetchAllPosts(successHandler, errorHandler) {
        fetchService.get("Posts",
            data => {
                const posts = data.map(post => new Post(post));
                successHandler(posts);
            },
            error => errorHandler(error));
    }

    fetchAnyPosts(postType, id, successHandler, errorHandler) {
        fetchService.get(`${postType}/${id}`,
            data => {
                const post = new Post(data);
                successHandler(post);
            },
            error => errorHandler(error));
    }

    sendPost(data, successHandler, errorHandler) {
        fetchService.post(`${post.type}Posts`, data,
            response => successHandler(response),
            error => errorHandler(error));
    }

    fetchPostComments(postId, successHandler, errorHandler) {
        fetchService.get(`Comments?postId=${postId}`,
            response => successHandler(response),
            error => errorHandler(error));
    }

    deletePost(id, successHandler, errorHandler) {
        fetchService.delete(`Posts/${id}`,
            response => successHandler(postdelete),
            error => errorHandler(error));
    }

    postComment(data, successHandler, errorHandler) {

        fetchService.post("Comments", data,
            response => successHandler(response),
            error => errorHandler(error));
    }
}