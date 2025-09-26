export declare function useSignIn(): {
    SignInFormComp: (_: any, { slots }: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    onSignIn: () => void;
};
export declare function useSignUp(): {
    SignUpFormComp: (_: any, { slots }: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    validateSignUpForm: () => any;
};
