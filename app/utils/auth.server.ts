import { json } from 'remix';
import { prisma } from './prisma.server';
import bcrypt from 'bcryptjs';
import type { RegisterForm, LoginForm } from './types.server';
import { createUser } from './users.server';

export const register = async (form: RegisterForm) => {
  const emailExists = await prisma.user.count({ where: { email: form.email } });

  if (emailExists) {
    return json(
      {
        error: 'User already exists with that email',
      },
      {
        status: 400,
      }
    );
  }

  const newUser = await createUser(form);

  if (!newUser) {
    return json(
      {
        error: 'Something went wrong trying to create a new user',
        fields: { email: form.email, password: form.password },
      },
      {
        status: 400,
      }
    );
  }

  return null;
};

export const login = async (form: LoginForm) => {
  const user = await prisma.user.findUnique({
    where: { email: form.email },
  });

  if (!user || !(await bcrypt.compare(form.password, user.password))) {
    return json(
      {
        error: `Incorrect login`,
      },
      {
        status: 400,
      }
    );
  }

  return null;
};