import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
    query {
        viewer {
            login
            name
            websiteUrl
            bio
            avatarUrl
            location
            company
            updatedAt
            repositories(first: 100) {
                totalCount
                edges {
                    node {
                        id
                        name
                        owner {
                            login
                        }
                        languages(first: 100) {
                            totalCount
                            totalSize
                            edges {
                                size
                                node {
                                    id
                                    color
                                    name
                                }
                            }
                        }
                    }
                }
            }
            followers(first: 1) {
                totalCount
            }
            following(first: 1) {
                totalCount
            }
            commitComments(first: 1) {
                totalCount
            }
        }
    }
`;
