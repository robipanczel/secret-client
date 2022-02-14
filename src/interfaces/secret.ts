export interface SecretResponseDTO {
  hash: string;
  secret: string;
  createdAt: string;
  expiresAt: string;
  remainingViews: number;
}

export interface SecretPostDTO {
  secret: string;
  expireAfterViews: number;
  expireAfter: number;
}
