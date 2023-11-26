export interface HomePageTemplateProps {
    usersData: UsersData[];
    isLoading: boolean
}
export interface UsersData extends UserDetailsList {
  postCount: number;
}
