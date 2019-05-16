export class UserProfile{
    userId:string;
    email:string ;
    profile: string;
    postProfile:string;
    timelinePost:string;
   caption:string;
   tag:string;
    timeline:string;
    friends:Friends[];
    city:string;
    state:string;
    published:Date;
    profilePhoto:string;
    
}

// export class posts{
//     timelinePost:string;
//     caption:string;
//     tag:string;
// }

export class Friends{
    name:string;
    dp:string;
}
// export class Images{
//     profilePhoto:string;
// }

