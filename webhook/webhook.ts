import { APIGatewayEvent, Handler } from 'aws-lambda';
import { Octokit } from 'octokit';

interface GithubRequestBody {
    ref?: string;
    repository?: RepoProps;
}

interface RepoProps {
    name: string;
    owner: { name: string };
    main_branch: string; 
    git_url: string;
}

export interface GithubWebHookPushEvent extends APIGatewayEvent {
    body: string;
}

export const handler: Handler = async (event: GithubWebHookPushEvent) => {
    
}