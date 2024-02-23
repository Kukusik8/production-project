import  path from 'path';
import  HTMLWebpackPlugin from 'html-webpack-plugin'
import  webpack from 'webpack'

export function buildResolver():webpack.ResolveOptions {   
    return {
        extensions: [".tsx", ".ts", ".js"],
      }
}

