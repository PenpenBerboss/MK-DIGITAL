import { UserModel } from '../models/UserModel';
import { router } from 'expo-router';

export class AuthController {
  static async handleSignIn(email: string, password: string) {
    try {
      await UserModel.signIn(email, password);
      router.replace('/(tabs)');
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static async handleSignOut() {
    try {
      await UserModel.signOut();
      router.replace('/auth');
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static async checkAuthStatus() {
    try {
      const user = await UserModel.getUser();
      return user;
    } catch (error) {
      return null;
    }
  }
}