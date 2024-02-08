import { Injectable } from '@nestjs/common';
import * as fs from "fs"
import * as  path from 'path';
@Injectable()
export class RemoveImageService {
    async Remove(imagePath: string) {
        try {
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }

        } catch (error) {
            const directory = path.dirname(imagePath);
            const extension = path.extname(imagePath);
            const newPath = path.join(directory, `${"imagemperdida"}${extension}`);
            fs.renameSync(imagePath, newPath);
            console.error(`Erro ao remover a imagem ${imagePath}:`, error);
        }
    }
}
