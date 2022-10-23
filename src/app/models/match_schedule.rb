class MatchSchedule
    require 'httpclient'
    require 'json'

    def self.get_match_schedule(team_data)
        client = HTTPClient.new
        headers = {'X-Auth-Token' => '6d7e9a201e70455da5ebf103136f3f47'}
        uri = 'http://api.football-data.org/v4/teams/766/matches'
        content = client.get_content(uri, header: headers)
        match_data = JSON.parse(content)
        hometeam_name = match_data["matches"][0]["homeTeam"]["name"]
        awayteam_name = match_data["matches"][0]["awayTeam"]["name"]

        team_data = MatchSchedule.create(hometeam_name:hometeam_name,awayteam_name:awayteam_name)

    end

    # def self.read(match_data)
    #     hometeam_name = match_data["matches"][0]["homeTeam"]["name"]
    #     awayteam_name = match_data["matches"][0]["awayTeam"]["name"]

    #     {
    #         hometeam_name: hometeam_name,
    #         awayteam_name: awayteam_name
    #     }
    # end

end

