class MatchSchedule < ApplicationRecord
    require 'httpclient'
    require 'json'

    def self.get_match_schedule
        client = HTTPClient.new
        headers = {'X-Auth-Token' => '6d7e9a201e70455da5ebf103136f3f47'}
        uri = 'http://api.football-data.org/v4/teams/766/matches'
        content = client.get_content(uri, header: headers)
        match_data = JSON.parse(content)
        hometeam_name = match_data["matches"][0]["homeTeam"]["name"]
        awayteam_name = match_data["matches"][0]["awayTeam"]["name"]
        first_date = match_data["matches"][0]["season"]["startDate"]
        last_date = match_data["matches"][0]["season"]["endDate"]
        group = match_data["matches"][0]["group"]
        competition_name = match_data["matches"][0]["competition"]["name"]
        stage = match_data["matches"][0]["stage"]
        MatchSchedule.create(hometeam_name:hometeam_name,awayteam_name:awayteam_name,first_date:first_date,last_date:last_date,group:group,competition_name:competition_name,stage:stage)

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

