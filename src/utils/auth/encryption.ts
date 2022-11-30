import * as bcrypto from 'bcrypt';

interface hashResult {
  hash: string;
  salt: string;
}

export const encryption = {
  // return hash and salt
  async hashPassword(password: string): Promise<hashResult> {
    const salt = await bcrypto.genSalt(10);
    const hash = await bcrypto.hash(password, salt);
    return { hash, salt };
  },

  // compare password with hash
  async comparePassword(password: string, hash: string): Promise<boolean> {
    const result = await bcrypto.compare(password, hash);
    return result;
  },
};
