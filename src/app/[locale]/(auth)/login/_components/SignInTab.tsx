"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingSwap } from "@/components/ui/loading-swap";
import { PasswordInput } from "@/components/ui/password-input";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";

const signUpSchema = z.object({
  email: z.email().min(1),
  password: z.string().min(6),
});

type SignInForm = z.infer<typeof signUpSchema>;

const SignInTab = () => {
  const router = useRouter();
  const form = useForm<SignInForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleSignIn = async (data: SignInForm) => {
    const response = await authClient.signIn.email(
      {
        ...data,
        callbackURL: ROUTES.HOME, // triggered when email verification is on
      },
      {
        onError: res => {
          toast.error(res.error.message || "登入失敗");
        },
        onSuccess: () => {
          toast.success("登入成功");
          router.push(ROUTES.HOME);
        },
      },
    );
    // eslint-disable-next-line no-console
    console.log(response);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignIn)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="請輸入電子郵件" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>密碼</FormLabel>
              <FormControl>
                <PasswordInput placeholder="請輸入密碼" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full mt-2">
          <LoadingSwap isLoading={isSubmitting}>登入</LoadingSwap>
        </Button>
      </form>
    </Form>
  );
};

export default SignInTab;
