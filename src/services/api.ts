import axios from "axios";
import type { SecretPostDTO, SecretResponseDTO } from "@/interfaces/secret";

export class SecretApi {
  private static readonly secretApiUrl = "http://localhost:5000/api";

  public static async getSecret(hash: string): Promise<SecretResponseDTO> {
    const response = await axios.get(
      `${SecretApi.secretApiUrl}/secret/${hash}`
    );
    return response.data;
  }

  public static async createSecret(
    newSecret: SecretPostDTO
  ): Promise<SecretResponseDTO> {
    const response = await axios.post(`${SecretApi.secretApiUrl}/secret`, {
      ...newSecret,
    });
    return response.data;
  }
}
